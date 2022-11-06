import github from "../image/github.png"
import logo from "../image/logo.png"

export { Navbar }

const Navbar = () => {
	return (<>
		<div style={{
			position: "relative",
			top: 0,
			width: "100%",
			display: "flex",
			alignItems: "center",
		}}>
			<img style={{
				width: "3em",
				height: "3em",
				paddingRight: "0.5em",
				paddingLeft: "0.5em"
			}} src={logo} alt="logo" />
			<h2 style={{
				display: "inline",
				paddingLeft: "0.5em",
				width: "90%",
				textAlign: "start"
			}}>Cultural Calendar</h2>
			<a href="https://github.com/CallumMackenzie/cultural-calendar">
				<img style={{
					width: "2em",
					height: "2em",
					paddingRight: "0.5em",
				}}
					src={github} alt="Github" />
			</a>

		</div>
	</>);
}