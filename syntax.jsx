export function useJSX({ data }) {
  let { title, page, id } = data;
  return (
    <div>
      <h2> {title} </h2>
      <p> {page},{id} </p>
    </div>
  )
}

export function useSpreadOperation({ data }) {
  const obj = { ...data, name: "test" }
  return (
    <div>
      <h2> {obj.name} </h2>
    </div>
  )
}

// not hoisted like function definitions and no local "this"
export const useArrowFunction = ({ data }) => {
  let { title, page, id } = data;
  return (
    <div>
      <h2> {title} </h2>
      <p> {page},{id} </p>
    </div>
  )
}
