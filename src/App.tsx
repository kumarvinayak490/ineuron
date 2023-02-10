import React, {useState, createContext} from 'react';

import { useUsersQuery } from './services/userApi';
import Layout from './components/Layout.tsx';
import Table from './components/UserTable';
import Modal from './components/BaseComponents/Modal';
import { Person } from './models/user.model';
import Form from './components/BaseComponents/Form';


interface CurrentUserContextType {
  currUser: Person | null,
  setCurrUser: React.Dispatch<React.SetStateAction<Person | null>>,
  openModel:boolean,
  setOpenModel:React.Dispatch<React.SetStateAction<boolean>>
}
export const CurrUserContext = createContext<CurrentUserContextType>({} as CurrentUserContextType)

function App() {
  const {data, error, isLoading, isSuccess}= useUsersQuery()
  const [openModel, setOpenModel]  = useState<boolean>(false)
  const [currUser, setCurrUser] = useState<Person | null>(null)
  return (
     <>
     <CurrUserContext.Provider value={{currUser, setCurrUser, openModel,setOpenModel }}>
     <Modal open={openModel} onClose={()=>{
      console.log("hello")
      setOpenModel(false)
     }}><Form/></Modal>
    <Layout>
      <Table data={data?.data}/>
    </Layout>
     </CurrUserContext.Provider>
     </>
  );
}

export default App;
