import DashboardNavigation from "./DashboardNavigation"
import LogoutButton from "./LogoutButton"

const DashboardArea = (props) => {

  return (
        <>
            <DashboardNavigation accountPage='dashboard' />
            <div className="user-registration-MyAccount-content">
                <h2>Welcome, {props.username}</h2>
                <p>Not <strong>{props.username}</strong>? <LogoutButton /></p>
            </div>
        </>
  )
}

export default DashboardArea