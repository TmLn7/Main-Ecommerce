import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../slices/authSlice";
import { StyledForm } from "./StyledForm";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3761142/pexels-photo-3761142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

// const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 20px 10px 0px 0px;
//   padding: 10px;
// `;

// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 0px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
// `;

const Register = () => {

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // // const [register, setRegister] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const  user = {username , email , password}
  //   if (username && email && password){
  //     axios.post("http://localhost:9000/api/auth/register",user )
  //     .then(res=>console.log(res))
  //     .then(window.location = '/login')
  //     alert("Амжилттай бүртгэл үүслээ")
  //   }
  //   else{
  //     alert("invalid input")
  //   };
  // }


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(registerUser(user));
  };

    
  return (
    <Container>
      <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
      <Title>Бүртгэл үүсгэх</Title>
        <input
          type="text"
          placeholder="Нэр"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Нууц үг"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>
          {auth.rigisterStatus === "pending" ? "Submitting..." : "Бүртгүүлэх"}
        </button>
        {auth.registerStatus === "rejected" ? (
        auth.registerError
        ) : null}
      </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default Register;


    
        // <Form onSubmit={(e)=>handleSubmit(e)}>
        //   <Input placeholder="Хэрэглэгчийн нэр" 
        //   type="username"
        //   onChange={(e) => setUser({ ...user, name :e.target.value})}
        //   />
        //   <Input placeholder="Имайл" 
        //   type="email"
        //   onChange={(e) => setUser({ ...user, email: e.target.value})}
        //   />
        //   <Input placeholder="Нууц үг" 
        //   type="password"
        //   onChange={(e) => setUser({ ...user, password: e.target.value})}
        //   />
        //   <Agreement>
        //     By creating an account, I consent to the processing of my personal
        //     data in accordance with the <b>PRIVACY POLICY</b>
        //   </Agreement>
        //   <button>
        //   {auth.rigisterStatus === "pending" ? "Submitting..." : "Register"}
        // </button>
        // {auth.registerStatus === "rejected" ? (
        //   <p>{auth.registerError}</p>
        // ) : null} */}
        //   {register ? (
        //   <p className="text-success">You Are Registered Successfully</p>
        // ) : (
        //   <p className="text-danger">You Are Not Registered</p>
        // )}
        // </Form>