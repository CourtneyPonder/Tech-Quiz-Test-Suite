describe('Tech Quiz', () => {
    it('should allow a user to complete the quiz and view their score', () => {
      cy.fixture('questions.json').then((questions) => {
        cy.visit('/quiz'); // Visit the quiz page
        questions.forEach((question, index) => {
          cy.contains(question.question);
          cy.contains(question.answers[0].text).click();
          cy.contains('Next');
        });
        cy.contains('Your Score');
      });
    });
  });
  