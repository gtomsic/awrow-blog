import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Gabriel Tomsic here</b> Discover my stories and creative
                ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/p1.jpeg"
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptate, rerum!
                    </h1>
                    <p className={styles.postDescription}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Labore distinctio sit ipsum debitis quis est
                        excepturi reprehenderit blanditiis adipisci, facilis
                        sed, voluptatibus, sequi fugiat voluptates et officiis
                        corporis! Aperiam, sunt!
                    </p>
                    <button className={styles.button}>Read More...</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
