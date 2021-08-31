import React, { useEffect, useState } from 'react';
import TestServerController from './TestServerController';

const TestServer = () => {
  const [value, setValue] = useState();
  const [number, setNumber] = useState(0);
  const [find, setFind] = useState(false);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    TestServerController.loadPersonnage().then((pp) => {
      setPlayer(pp);
    });
  }, []);
  const handle = (ev) => {
    setNumber(ev.currentTarget.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    TestServerController.load(number).then((response) => {
      setValue(response);
      if (response === 'Bravo tu as trouvé le juste prix') {
        setFind(true);
      }
      setNumber('');
    });
  };
  if (player) {
    return (
      <div>
        <div>
          <p>{player.vitality}</p>
        </div>
        <h1>{ !find ? ('Trouve le Bon PRIX') : ('BRAVO')}</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={number} onChange={handle} id="myValue" />
          <input type="submit" value="Valider" />
        </form>
        {value}
      </div>
    );
  }
  return <div />;
};

export default TestServer;
