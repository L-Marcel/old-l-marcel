import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import style from "../../styles/snake.module.scss";

function SnakeScreen() {
  const { seconds } = useStopwatch({ autoStart: true });
  const [points, setPoints] = useState(0);
  const [target, setTarget] = useState<[number, number]>([1, 8]);
  const [direction, setDirection] = useState<Direction>("r");
  const [snake, setSnake] = useState<[number, number, Direction][]>([[1, 1, "r"]]);
  const [itens, setItens] = useState<any[][]>([ ...new Array(25).fill([ ...new Array(25) ]) ]);

  //Verify if direction is changed
  useEffect(() => {
    document.addEventListener("keydown", (ev: any) => {
      const e: KeyboardEvent = ev;
      
      if(e) {
        if(e.key === "ArrowDown") {
          setDirection("d");
        };

        if(e.key === "ArrowUp") {
          setDirection("u");
        };

        if(e.key === "ArrowLeft") {
          setDirection("l");
        };

        if(e.key === "ArrowRight") {
          setDirection("r");
        };
      };

      return {} as any;
    });
  }, []);

  //Change snake point every second
  useEffect(() => {
    changeSnakePoint();
  }, [seconds]);

  //Function for change snake point
  function changeSnakePoint() {
    let snakeBlocks = snake.map((s, i) => {
      let dir = i === 0? direction:s[2];
      return newBlockOnDirection(s[0], s[1], dir);
    });

    setSnake(snakeBlocks);
  };

  //Function for get new point of the block in current direction
  function newBlockOnDirection(x: number, y: number, d: Direction): [number, number, Direction] {
    switch(d) {
      case "d":
        y++;
        break;
      case "u":
        y--;
        break;
      case "r":
        x++;
        break;
      case "l":
        x--;
        break;
      default:
        x++;
        break;
    };

    return [x, y, d];
  };

  //Function to check if the block is an snake block
  function isSnakeBlock(x: number, y: number) {
    for(let i in snake) {
      if(snake[i][0] === x && snake[i][1] === y) {
        return true;
      };
    };

    return false;
  };

  return (
    <div className={style.screen}>
      <div className={style.body}>
        {
          itens.map((r, y) => {
            return r.map((v, x) => {
              return (
                <div key={`${x},${y}`} 
                  className={`${style.item} ${isSnakeBlock(x, y)? style.snake:
                  target[0] === x && target[1] === y? style.active:""}`}
                >
                </div>
              );
            });
          })
        }
      </div>
    </div>
  );
};

export default SnakeScreen;