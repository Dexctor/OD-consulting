// components/Timeline.js
import parcours from '../data/parcours';

export default function Timeline() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Mon Parcours</h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical list-none">
        {parcours.map((item, index) => (
          <li key={index} className='list-none'>
            {index !== 0 && <hr />}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10 ${index % 2 === 0 ? 'md:text-end' : ''}`}>
              <time className="font-mono italic">{item.dateTime}</time>
              <div className="text-lg font-black">{item.title}</div>
              {item.role && <p className="italic">{item.role}</p>}
              <ul className="list-disc pl-5">
                {item.details.map((detail, detailIndex) => (
                  <li className='list-none' key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
