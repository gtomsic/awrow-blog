import Pagination from "../pagination/Pagination";
import styles from "./cardlist.module.css";

const CardList = () => {
    return (
        <div className={styles.container}>
            <Pagination />
        </div>
    );
};

export default CardList;
