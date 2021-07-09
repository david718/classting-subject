import { useRecoilValue } from 'recoil';

import { QuizResultsState } from 'src/state';
import { AnimationLoader, Content } from 'components/Molecules';
import Atoms from 'components/Atoms';

const TrophyNumbers = () => {
  const quizResults = useRecoilValue(QuizResultsState);
  const correctQuizNumbers = quizResults.filter((quiz) => quiz.correct).length;

  return (
    <Content marginTop="0px">
      <Atoms.Div
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 328px)"
      >
        <Atoms.Title margin="0px 0px 16px 0px">
          {`YOU GOT ${correctQuizNumbers} ${
            correctQuizNumbers > 1 ? 'THROPIES' : 'THROPY'
          }`}
        </Atoms.Title>
        {correctQuizNumbers > 0 ? (
          <AnimationLoader
            name="trophy"
            path="https://assets1.lottiefiles.com/packages/lf20_rmlyntkm.json"
          />
        ) : (
          <AnimationLoader
            name="try again"
            path="https://assets5.lottiefiles.com/private_files/lf30_uDAsLk.json"
          />
        )}
      </Atoms.Div>
    </Content>
  );
};

export default TrophyNumbers;
