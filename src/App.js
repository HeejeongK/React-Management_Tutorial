import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  'id' : 1,
  'img' : 'http://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '770707',
  'gender' : '남자',
  'job' : '학생'
},
{
  'id' : 2,
  'img' : 'http://placeimg.com/64/64/2',
  'name' : '홍길길',
  'birthday' : '770707',
  'gender' : '남자',
  'job' : '학생'
},
{
  'id' : 3,
  'img' : 'http://placeimg.com/64/64/3',
  'name' : '홍동동',
  'birthday' : '770707',
  'gender' : '남자',
  'job' : '학생'
}
]
function App() {
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.img}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          )
        })
      }
    </div>

  );
}

export default App;
