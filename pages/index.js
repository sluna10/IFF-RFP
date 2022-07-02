import Card from "../components/card";
import Link from "next/link";
// import '../styles/Home.module.css'


export default function Court({court}) {
    // console.table(judges);
    // console.table(court);
    return (
        <div className="container">
			<div className="row">
			<Card
				title = {<Link href = "http://localhost:3000/Directory">Directory</Link>}
				// title={<a href = "http://localhost:3000/api/judges">Courthouse Offices</a>}
				alt="judgesTable"
				
				/>
        </div>
        </div>)}