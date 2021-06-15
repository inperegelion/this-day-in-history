import { useEffect, useState, FC } from 'react'
import UserCard from '../UserCard'
import getAnniversaries from '../../api/users/b-days'
import chevron from '../../assets/icons/chevron-right.svg'
import './style.css'

// Tab statuses:
const [LOADING, EMPTY, LOADED] = ['LOADING', 'EMPTY', 'LOADED']

type AnniversaryTabProps = Readonly<{
  tab: string
}>

const AnniversaryTab: FC<AnniversaryTabProps> = (props) => {
  const { tab } = props
  const [users, setUsers] = useState([])
  const [status, setStatus] = useState(LOADING)
  const [usersToShow, showMoreUsers] = useState(10)

  useEffect(() => {
    const today = new Date()

    let dateFrom, dateTo

    switch (tab) {
      case 'TODAY':
        dateFrom = formattDate(today)
        break

      case 'PAST_DATES':
        dateFrom = addDaysAndFormat(today, -14)
        dateTo = addDaysAndFormat(today, -1)
        break
      case 'NEXT_DATES':
        dateFrom = addDaysAndFormat(today, 1)
        dateTo = addDaysAndFormat(today, 14)
        break
      default:
        dateFrom = formattDate(today)
        break
    }

    async function fetchUsers(dateFrom: string, dateTo: string | undefined) {
      setStatus(LOADING)
      const usersData = await getAnniversaries(dateFrom, dateTo)

      setUsers(
        usersData
          .map((user: any) => ({
            ...user,
            hiringDate: new Date(user.birthday).toISOString().slice(5, 10),
          }))
          .sort((a: any, b: any) => {
            if (tab === 'TODAY')
              return a.name.localeCompare(b.name) > 0 ? 1 : -1
            if (tab === 'PAST_DATES' && a.hiringDate < b.hiringDate) return 1
            if (tab === 'NEXT_DATES' && a.hiringDate > b.hiringDate) return 1

            if (a.hiringDate === b.hiringDate) {
              return a.name.localeCompare(b.name) > 0 ? 1 : -1
            }
            return -1
            // TODO: compose a standalone function out of this.
            // TODO: move 'fetchUsers' out from component.
          }),
      )
      showMoreUsers(10)
      setStatus(usersData.length > 0 ? LOADED : EMPTY)
    }
    fetchUsers(dateFrom, dateTo)
  }, [tab])

  switch (status) {
    case LOADING:
      return <p className="AnniversaryTab-loading">Loading...</p>
    case EMPTY:
      return (
        <p className="AnniversaryTab-empty-msg">
          Unfortunately, there are no users who have anniversary on these dates
        </p>
      )
    case LOADED:
      return (
        <>
          <ul className="Users-list">
            {users.slice(0, usersToShow).map((user: any, i: number) => (
              <UserCard user={user} key={`card-${i}-of-user-${user.id}`} />
            ))}
          </ul>
          {users.length > usersToShow ? (
            <button
              className="AnniversaryTab-showmore"
              onClick={() => showMoreUsers((prevState) => prevState + 10)}
            >
              Show more <img src={chevron} alt="arrow" />
            </button>
          ) : null}
        </>
      )

    default:
      return <p>Unpredicted error happened</p>
  }
}

export default AnniversaryTab

function addDaysAndFormat(date: Date, diff: number): string {
  var tempDate = new Date(date)
  tempDate.setDate(tempDate.getDate() + diff)
  return formattDate(tempDate)
  // TODO: keep on this func only to add days. Update usage places
}

function formattDate(date: Date): string {
  const strMMdd = date.toISOString().slice(5, 10)
  return `${strMMdd.slice(0, 2)}.${strMMdd.slice(3)}`
}
