import style from './Home.module.css'
export default function Home(): JSX.Element {
	return (
		<div className={style.containerHome}>
			<h1>Home</h1>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. In inventore amet minus nobis
				<br />
				ipsam expedita reprehenderit repellat voluptatibus minima, quaerat facere voluptates! Soluta
				<br />
				laboriosam iste corrupti alias explicabo ut atque.
			</p>
			<img
				src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/02/SatelliteApproachingPluto-1024x729.jpg"
				alt=""
			/>
		</div>
	)
}
