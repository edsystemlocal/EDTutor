export default function PrintInput({ inputs }) {
    return (
      <div>
        <ul>
          {/* Iterating over the inputs object using Object.entries() */}
          {Object.entries(inputs).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <strong>{key}: </strong>
              {value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  