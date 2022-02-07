import Link from "next/link";
import style from "../styles/index.module.scss";

function Home() {
  const projects: Project[] = [
    {
      name: "Snake",
      image: "",
      support: ["desktop"]
    }
  ];

  return (
    <div
      className={style.container}
    >
      <h1>Projetos hospedados:</h1>
      <div className={style.list}>
        {projects.map(p => {
          return (
            <Link href={`/${p.name.toLocaleLowerCase().replace(/ /g, "-")}`} key={p.name}>
              <div className={style.item}>
                <h1>{p.name}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;