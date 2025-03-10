import React, {useState} from "react";
import { Form } from "semantic-ui-react";



function PokemonForm({ handleAddPoke}) {
  const [form, setForm] = useState(
    {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }
  );

  function handleChange(e){
  
    setForm(
      {
      ...form,
      [e.target.name]: e.target.value,
    }
    )
  }

  function handleSubmit() {
    
    console.log("are you a thing?")
    const newPoke = {
      name: form.name,
      hp: form.hp,
      sprites: {
        front: form.frontUrl,
        back: form.backUrl
      } 
    };
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPoke),
      
    })
      .then((r) => r.json())
      .then(handleAddPoke);
      
  }

  console.log("potato")
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit} >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={form.name} onChange={handleChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={form.hp}  onChange={handleChange}  />

          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value ={form.frontUrl}
            onChange={handleChange}
          />

          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={form.backUrl}
            onChange={handleChange}
          />

        </Form.Group>
        <Form.Button >Submit</Form.Button>
      </Form>
      
    </div> 
  )
}

export default PokemonForm;
