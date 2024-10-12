import Student from "../components/student";

export default function Home () {
  const name: string = "Abdul Ahad";
  const age: number = 21;
  const salary: number = 50000;

  return (
    <div>
      <h1>home</h1>
      <Student name={name} age={age} salary={salary}/>

    </div>
  )
}


