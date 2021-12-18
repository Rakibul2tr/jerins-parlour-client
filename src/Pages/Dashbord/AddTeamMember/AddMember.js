
import { Button, Grid,  Input, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddMember = () => {
   const [name,setname]=useState('')
   const [profision,setprofission]=useState('')
   const [descripton,setdecription]=useState('')
   const [picture,setpicture]=useState()

   
   

    const handleSubmit =(e)=>{
       e.preventDefault();
       
        const formData = new FormData();
        formData.append('name',name)
        formData.append('profision',profision)
        formData.append('des',descripton)
        formData.append('image', picture);
        
      fetch('http://localhost:5000/teams',{
          method:'POST',
          body:formData,
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.insertedId){
              alert('Congrasulation! your Added Member is successfull')
          }
      })

    }
    return (
        <Box sx={{py:5}}>
            <Grid>
            <form className="loginform" onSubmit={handleSubmit}>
                <TextField onChange={e=>setname(e.target.value)} name="name" label="name" variant="standard" type="text" /><br/>
                <TextField onChange={e=>setprofission(e.target.value)} name="profission" label="profassion" variant="standard" type="text" /><br/>
                <TextField onChange={e=>setdecription(e.target.value)}  name="des" label="descripton" variant="standard" type="text" /><br/>
                
                    <Button  sx={{width:'200px'}}>
                        <Input onChange={e=>setpicture(e.target.files[0])}  name="picture" label="image" variant="standard"
                        accept="image/*"
                         type="file" 
                        sx={{width:'100%',border:'0px'}}/>
                     </Button><br/>
                <input type="submit" value="Add Team Member" /><br/>
            </form>
            </Grid>
        </Box>
    );
};

export default AddMember;