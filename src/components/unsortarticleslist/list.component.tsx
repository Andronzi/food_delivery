import React from "react";
import styles from "./list.module.scss";

const UnsortArticlesList: React.FC<{
  arrayOfElements: Array<{ href: string; value: string }>;
}> = ({ arrayOfElements }) => (
  <ul className={styles.ul}>
    {arrayOfElements.map(element => (
      <li>
        <a href={element.href}>{element.value}</a>
      </li>
    ))}
  </ul>
);

export default UnsortArticlesList;
