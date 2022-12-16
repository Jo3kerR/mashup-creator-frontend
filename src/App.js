import React, { useState, useEffect } from "react";
import axios from "axios";

import Heading from "./components/Heading";
import ContestLink from "./components/link/ContestLink";
import Ratings from "./components/Ratings";
import Handles from "./components/Handles";
import AddDuration from "./components/form/AddDuration";
import AddHandle from "./components/form/AddHandle";
import AddRating from "./components/form/AddRating";

import "./css/bootstrap.min.css";
import "./css/app.css";

function App() {
  const [duration, setDuration] = useState(120);
  const [users, setUsers] = useState([]);
  const [ratings, setRatings] = useState([]);

  const [contestNumber, setContestNumber] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const [contestLink, setContestLink] = useState();

  const createContestUrl = "http://localhost:9000/create";
  const getContestUrl = "http://localhost:9000/contests";
  const waitTime = 10000;

  useEffect(() => {
    if (contestNumber === -1) return;

    const interval = setInterval(async () => {
      await axios.get(getContestUrl).then((res) => {
        for (const contest of res.data) {
          if (contestNumber === contest.contestNumber) {
            setContestLink(contest.contestLink);
            setSubmitted(false);
            clearInterval(interval);
          }
        }
      });
    }, waitTime);

    return () => {
      clearInterval(interval);
    };
  }, [contestNumber]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (users.length === 0 || ratings.length === 0) return;
    setSubmitted(true);
    setContestLink("loading");
    await axios
      .post(createContestUrl, {
        duration: duration,
        users: users,
        ratings: ratings,
      })
      .then((res) => {
        setContestNumber(res.data);
      });
  };

  return (
    <>
      <Heading />

      <div className="container">
        <div className="row">
          <Handles list={users} handler={setUsers} />

          <form onSubmit={handleSubmit} className="col-6 formRow">
            <AddDuration duration={duration} setDuration={setDuration} />

            <AddHandle users={users} setUsers={setUsers} />

            <AddRating ratings={ratings} setRatings={setRatings} />

            <div className="text-center" style={{ padding: "1rem" }}>
              <button
                type="submit"
                disabled={submitted}
                className="btn btn-outline-light"
                style={{ marginLeft: "-30px" }}
              >
                CREATE
              </button>
            </div>
          </form>

          <Ratings list={ratings} handler={setRatings} />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div style={{ padding: "1rem" }} className="text-center">
              <ContestLink link={contestLink} />
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
