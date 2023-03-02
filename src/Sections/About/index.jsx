import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
						I'm Owolabi Destiny Oluwanifemi from Lagos state, Nigeria.
						Im a self-taught frontend developer and a forward thinking,and an excellence-driven individual with great organisational and
						interpersonal skills, offering more than a year experience building and intragrating,scaling and supporting web applications
					</p>
					{/* <p className={styles.desc}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p> */}
				</div>
				<div className={styles.right}>
					<img
						src="./images/profile.png"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;
