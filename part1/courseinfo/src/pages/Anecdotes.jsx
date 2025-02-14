import { useState } from "react";

const AnecdoteVotes = ({ votes }) => {
  return (
    <>
      <h3>Votes</h3>
      <table>
        <thead>
          <tr>
            <th>Anecdote</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(votes).map(([index, voteCount]) => (
            <tr key={index}>
              <td>{Number(index) + 1}</td> {/* Convert index to number */}
              <td>{voteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const MostVoted = ({ anecdotes, votes }) => {
  // Pass anecdotes as prop
  const findMostVoted = () => {
    let mostVotedIndex = -1;
    let maxVotes = -1;

    for (const index in votes) {
      if (votes[index] > maxVotes) {
        maxVotes = votes[index];
        mostVotedIndex = index;
      }
    }

    if (mostVotedIndex === -1) {
      return null;
    }

    return anecdotes[mostVotedIndex]; // Access anecdotes array using index
  };

  const mostVotedAnecdote = findMostVoted();

  return (
    <div>
      <h3>Winner</h3>
      <em>{mostVotedAnecdote ? <p>{mostVotedAnecdote}</p> : <p>No votes yet.</p>}</em>
    </div>
  );
};

const Anecdotes = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({}); // Initialize as an empty object

  const getRandomInteger = () => Math.floor(Math.random() * anecdotes.length);

  const handleVoteClick = () => {
    setVotes({
      ...votes, // Spread existing votes
      [selected]: (votes[selected] || 0) + 1, // Increment vote for selected anecdote
    });
  };

  const handleNextAnecdoteClick = () => {
    setSelected(getRandomInteger());
  };

  return (
    <div>
      <h3>Anecdotes</h3>
      <p>
        {selected + 1}. {anecdotes[selected]}
      </p>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleNextAnecdoteClick}>Next anecdote</button>
      <MostVoted anecdotes={anecdotes} votes={votes} />
      <AnecdoteVotes votes={votes} /> {/* Pass the votes object */}
    </div>
  );
};

export default Anecdotes;
