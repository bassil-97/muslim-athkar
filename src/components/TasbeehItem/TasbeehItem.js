import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import {
  Button,
  IconButton,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import "./TasbeehItem.css";

export default function TasbeehItem({ zekr1, zekr2, zekr3, zekr4 }) {
  const { width, height } = useWindowSize();
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [count4, setCount4] = React.useState(0);

  const handleReset = (id) => {
    switch (id) {
      case 1:
        setCount1(0);
        break;

      case 2:
        setCount2(0);
        break;

      case 3:
        setCount3(0);
        break;

      case 4:
        setCount4(0);
        break;

      default:
        break;
    }
  };

  const handleAddCount1 = () => {
    if (count1 === 33) {
      setCount1(0);
    }

    let addCountText = document?.getElementsByClassName("add-counter")[0];
    setCount1((prevState) => prevState + 1);
    addCountText.style.opacity = "1";
    addCountText.classList.add("new-counter");
    setTimeout(() => {
      addCountText.classList.remove("new-counter");
      addCountText.style.opacity = "0";
    }, 500);
  };

  const handleAddCount2 = () => {
    if (count2 === 33) {
      setCount2(0);
    }

    let addCountText = document?.getElementsByClassName("add-counter")[1];
    setCount2((prevState) => prevState + 1);
    addCountText.style.opacity = "1";
    addCountText.classList.add("new-counter");
    setTimeout(() => {
      addCountText.classList.remove("new-counter");
      addCountText.style.opacity = "0";
    }, 500);
  };

  const handleAddCount3 = () => {
    if (count3 === 33) {
      setCount3(0);
    }

    let addCountText = document?.getElementsByClassName("add-counter")[2];
    setCount3((prevState) => prevState + 1);
    addCountText.style.opacity = "1";
    addCountText.classList.add("new-counter");
    setTimeout(() => {
      addCountText.classList.remove("new-counter");
      addCountText.style.opacity = "0";
    }, 500);
  };

  const handleAddCount4 = () => {
    if (count4 === 10) {
      setCount4(0);
    }

    let addCountText = document?.getElementsByClassName("add-counter")[3];
    setCount4((prevState) => prevState + 1);
    addCountText.style.opacity = "1";
    addCountText.classList.add("new-counter");
    setTimeout(() => {
      addCountText.classList.remove("new-counter");
      addCountText.style.opacity = "0";
    }, 500);
  };

  if (zekr1)
    return (
      <Card sx={{ minWidth: 445 }}>
        <CardMedia
          component="img"
          height="240"
          image="https://cdn.dribbble.com/users/3768006/screenshots/17919281/media/7c74bc838d1a4f866f415a0cad2ae078.jpg?compress=1&resize=1000x750&vertical=top"
          alt="green iguana"
        />
        <CardContent className="tasbeeh-item">
          {count1 === 33 && <Confetti width={width} height={height} />}
          <div className="d-flex justify-content-between align-items-center">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddCount1}
              sx={{ backgroundColor: "var(--primary-color)" }}
            >
              سبحان الله
            </Button>
            <IconButton onClick={() => handleReset(1)}>
              <RestartAltIcon />
            </IconButton>
            <div>
              <h4 className="mb-0">{count1}/33</h4>
              <h6 className="mb-0 text-center add-counter" id="add-counter">
                +1
              </h6>
            </div>
          </div>
        </CardContent>
      </Card>
    );

  if (zekr2)
    return (
      <Card sx={{ minWidth: 445 }}>
        <CardMedia
          component="img"
          height="240"
          image="https://cdn.dribbble.com/users/1884628/screenshots/3782092/media/5ebd8cf436bf67fcefb4278db54dcdaa.jpg?compress=1&resize=800x600&vertical=top"
          alt="green iguana"
        />
        <CardContent className="tasbeeh-item">
          {count2 === 33 && <Confetti width={width} height={height} />}
          <div className="d-flex justify-content-between align-items-center">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddCount2}
              sx={{ backgroundColor: "var(--primary-color)" }}
            >
              الحمدلله
            </Button>
            <IconButton onClick={() => handleReset(2)}>
              <RestartAltIcon />
            </IconButton>
            <div>
              <h4 className="mb-0">{count2}/33</h4>
              <h6 className="mb-0 text-center add-counter" id="add-counter">
                +1
              </h6>
            </div>
          </div>
        </CardContent>
      </Card>
    );

  if (zekr3)
    return (
      <Card sx={{ minWidth: 445 }}>
        <CardMedia
          component="img"
          height="240"
          image="https://cdn.dribbble.com/users/3576405/screenshots/10971087/media/45642fdaa827d3fff020301034bfaa66.png?compress=1&resize=1000x750&vertical=top"
          alt="green iguana"
        />
        <CardContent className="tasbeeh-item">
          {count3 === 33 && <Confetti width={width} height={height} />}
          <div className="d-flex justify-content-between align-items-center">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddCount3}
              sx={{ backgroundColor: "var(--primary-color)" }}
            >
              الله أكبر
            </Button>
            <IconButton onClick={() => handleReset(3)}>
              <RestartAltIcon />
            </IconButton>
            <div>
              <h4 className="mb-0">{count3}/33</h4>
              <h6 className="mb-0 text-center add-counter" id="add-counter">
                +1
              </h6>
            </div>
          </div>
        </CardContent>
      </Card>
    );

  if (zekr4)
    return (
      <Card sx={{ minWidth: 445 }}>
        <CardMedia
          component="img"
          height="240"
          image="https://cdn.dribbble.com/users/2692366/screenshots/6432960/ramadan2019.png?compress=1&resize=800x600&vertical=top"
          alt="green iguana"
        />
        <CardContent className="tasbeeh-item">
          {count4 === 10 && <Confetti width={width} height={height} />}
          <div className="d-flex justify-content-between align-items-center">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddCount4}
              sx={{ backgroundColor: "var(--primary-color)" }}
            >
              لا إله إلا الله
            </Button>
            <IconButton onClick={() => handleReset(4)}>
              <RestartAltIcon />
            </IconButton>
            <div>
              <h4 className="mb-0">{count4}/10</h4>
              <h6 className="mb-0 text-center add-counter" id="add-counter">
                +1
              </h6>
            </div>
          </div>
        </CardContent>
      </Card>
    );
}
