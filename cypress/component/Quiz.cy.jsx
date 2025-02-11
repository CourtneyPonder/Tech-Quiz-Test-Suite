describe('Quiz Component', () => {
    it('renders the first question', () => {
      const questions = [
        {
          question: 'What is 2 + 2?',
          answers: [
            { text: '3', isCorrect: false },
            { text: '4', isCorrect: true },
            { text: '5', isCorrect: false }
          ]
        }
      ];
  
      cy.mount(<Quiz questions={questions} />);
      cy.contains('What is 2 + 2?');
    });
  
    it('increments score when selecting the correct answer', () => {
      const questions = [
        {
          question: 'What is 2 + 2?',
          answers: [
            { text: '3', isCorrect: false },
            { text: '4', isCorrect: true },
            { text: '5', isCorrect: false }
          ]
        }
      ];
  
      cy.mount(<Quiz questions={questions} />);
      cy.contains('4').click();
      cy.contains('Score: 1');
    });
  });
  