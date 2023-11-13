import DashboardNavigation from "./DashboardNavigation"
import LogoutButton from "./LogoutButton"

const DashboardArea = (props) => {

  return (
        <>
            <DashboardNavigation accountPage='dashboard' userRole={props.userRole} />
            <div className="user-registration-MyAccount-content">
                <h2>Welcome, {props.username}</h2>
                <p><strong>Email: </strong> {props.email}</p>
                <p>Not <strong>{props.username}</strong>? <LogoutButton /></p>
            </div>
        </>
  )
}

export default DashboardArea