import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Content,
  InterestArea,
  InterestItems,
  InterestCheck,
  ButtonForm,
} from './styles';

interface Interests {
  name: string;
  selected: boolean;
}

const Profile: React.FC = () => {
  const { user, interests, saveInterests } = useAuth();
  const [userInterests, setUserInterests] = useState<Interests[]>([]);

  useEffect(() => {
    const interestsFromUser = interests.split(';');

    const newArrayInterests: Interests[] = [
      {
        name: 'politics',
        selected: interestsFromUser.includes('politics'),
      },
      {
        name: 'business',
        selected: interestsFromUser.includes('business'),
      },
      {
        name: 'tech',
        selected: interestsFromUser.includes('tech'),
      },
      {
        name: 'science',
        selected: interestsFromUser.includes('science'),
      },
      {
        name: 'sports',
        selected: interestsFromUser.includes('sports'),
      },
    ];

    setUserInterests(newArrayInterests);
  }, [interests]);

  const handleUpdateInterests = useCallback(
    (index: number) => {
      userInterests[index].selected = !userInterests[index].selected;

      setUserInterests([...userInterests]);
    },
    [userInterests],
  );

  const handleSaveInterestsInStorage = useCallback(() => {
    let interestsToStorage = '';

    userInterests
      .filter(userInterest => {
        return userInterest.selected;
      })
      .forEach(userInterest => {
        interestsToStorage = interestsToStorage.concat(`${userInterest.name};`);
      });

    interestsToStorage = interestsToStorage.slice(
      0,
      interestsToStorage.length - 1,
    );

    saveInterests(interestsToStorage);

    alert('Interests saved. Click "BACK TO HOME" to return to Dashboard');
  }, [userInterests, saveInterests]);

  return (
    <Container>
      <Content>
        <h1>
          WELCOME,
          <strong>{user}</strong>
        </h1>

        <InterestArea>
          <p>MY INTERESTS</p>

          <InterestItems>
            {userInterests.map((userInterest, index) => (
              <InterestCheck
                key={userInterest.name}
                name={userInterest.name}
                selected={userInterest.selected}
                variant="outlined"
                onClick={() => handleUpdateInterests(index)}
              >
                {userInterest.name}
              </InterestCheck>
            ))}
          </InterestItems>
        </InterestArea>

        <ButtonForm
          type="button"
          onClick={() => handleSaveInterestsInStorage()}
        >
          SAVE
        </ButtonForm>

        <Link to="/">BACK TO HOME</Link>
      </Content>
    </Container>
  );
};

export default Profile;
