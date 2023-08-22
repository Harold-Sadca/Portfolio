import React from 'react';

export const projects = [
  {
    name: 'DocCare',
    description: 'DocCare is a private healthcare platform, which prioritize the patients well-being and provide seamless access to quality medical care.',
    contribution: ['● Developed a scalable full stack private healthcare application by capitalising on the power of Redux, Next.js, MySQL and Typescript.',
      '● Integrated live messaging using socket.io to give better user experience.',
      '● Facilitated project coordination with 3 developers using Trello for task assignment and git for version control.',
      '● Ensured seamless integration between client and server by creating reliable components.',
      '● Drafted and implemented a solid foundation of the schema to ensure efficient data management.',
      '● Guaranteed robust functionality by introducing Cypress end-to-end testing to deliver a consistent user experience.',
      '● Enhanced security by incorporating a third-party authentication system.'],
    tech:['Redux.js', 'TypeScript', 'Node.js', 'WebSocket', 'MySQL', 'Cypress', 'Express.js', 'Next.js', 'CSS'],
    code:'https://github.com/Harold-Sadca/DocCare',
    link:''
  },
  {
    name: 'TinPet',
    description: 'TinPet is the app that connects dog owners with compatible canine companions, fostering joyful adventures and lifelong bonds.',
    contribution: ['● Revitalized an online networking application through collaborative team efforts, refactoring and modularizing the codebase; optimized maintainability and scalability, resulting in a 40% reduction in code complexity and a 25% improvement in system performance.',
      '● Improved error detection and maintainability by up to 30% by integrating Typescript.',
      '● Utilized Sequelize with PostgreSQL to leverage advanced querying capabilities, ensure data integrity, and facilitate seamless data modeling.',
      '● Ensured code reliability by up to 25% by integrating unit tests using Jest.'],
    tech:['Redux.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Cypress', 'Koa.js', 'React.js', 'Sequelize', 'CSS'],
    code:'https://github.com/Harold-Sadca/tinpet-final',
    link:''
  },
  {
    name: 'MealRoulette',
    description: 'Meal Roulette is a comprehensive platform designed to inspire and plan meals, and explore new flavors with ease.',
    contribution: ['● Took ownership of the end-to-end development of the full stack application, working independently as the sole software engineer involved in the project.',
      '● Integrated authentication using Passport enhancing security and user experience.',
      '● Integrated a cocktail API to give users random cocktail and save it to the database only when added to favourite.',
      '● Crafted and executed the design and implementation of the underlying API and data modeling, ensuring each component are up to standard every aspect of the application.',
      '● Designed both the components of both client and server to ensure seamless integration.'],
    tech:['Redux.js', 'JavaScript', 'Node.js', 'MongoDB', 'Mongoose', 'Express.js', 'React.js', 'Passport', 'CSS'],
    code:'https://github.com/Harold-Sadca/Meal-Roulette-',
    link:''},
  {
      name: 'TriviaTrek',
      description: 'A dynamic quiz app that challenges users knowledge across various categories. Select quiz categories, difficulty levels, and types to customize your experience.',
      contribution: ['● Engineered a feature-rich quiz app using React and Redux, offering dynamic customization options for categories, difficulty levels, and quiz types.',
        '● Integrated with an external API to fetch diverse trivia questions, ensuring engaging and interactive user experiences.',
        '● Employed Redux for efficient state management, enabling data persistence and smooth navigation for users.',
        '● Demonstrated problem-solving skills by resolving data synchronization challenges between API responses and app components, ensuring accurate and up-to-date content presentation.',
        '● Crafted a responsive UI, showcasing proficiency in modern web development, user interface design, and RESTful API integration while following the best practices.'],
      tech:['Redux.js', 'TypeScript', 'React.js', 'CSS'],
      code:'https://github.com/Harold-Sadca/TriviaTrek',
      link:'https://triviatrek.netlify.app/'}
  ]

  export function InfiniteScrollLoop({
    surroundingBackup = 4,
    outerStyle,
    innerStyle,
    children
  }) {
    const contentRef = React.useRef(null);
    const scrollRef = React.useRef(null);
    const [height, setHeight] = React.useState(0);
  
    const backupHeight = height * surroundingBackup;
  
    const handleScroll = React.useCallback(() => {
      if (scrollRef.current) {
        const scroll = scrollRef.current.scrollTop;
        if (scroll < backupHeight || scroll >= backupHeight + height) {
          scrollRef.current.scrollTop = backupHeight + (scroll % height);
        }
      }
    }, [height]);
  
    React.useLayoutEffect(() => {
      if (contentRef.current) {
        setHeight(contentRef.current.offsetHeight);
        scrollRef.current.scrollTop = backupHeight;
      }
    });
  
    return (
      <div className="infinite-scroll-loop-outer" style={outerStyle}>
        <div
          className="infinite-scroll-loop-inner"
          ref={scrollRef}
          style={{
            height,
            ...innerStyle
          }}
          onScroll={handleScroll}
        >
          {Array(surroundingBackup)
            .fill()
            .map(() => (
              <div>{children}</div>
            ))}
          <div ref={contentRef}>{children}</div>
          {Array(surroundingBackup)
            .fill()
            .map(() => (
              <div>{children}</div>
            ))}
        </div>
      </div>
    );
  }
  