/*import { useState } from "react";
import "./AddMovieForm.css";
import { Input, Button } from "antd";



const AddMovieForm = ({ onMovieAdded }) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onMovieAdded({ title, director, duration, imageUrl, description, budget });
    setTitle("");
    setDirector("");
    setDuration(0);
    setImageUrl("");
    setDescription("");
    setBudget(0);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre :</label>
        <Input
          placeholder="ajouter un titre"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Réalisateur :</label>
        <Input
          placeholder="ajouter un réalisateur"
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Durée :</label>
        <Input
          placeholder="ajouter une durée"
          type="number"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <label>{"URL de l'image :"}</label>
        <Input
          placeholder="ajouter une URL"
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <label>Description :</label>
        <Input
          placeholder="ajouter une description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Budget :</label>
        <Input
          type="number"
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value))}
        />
      </div>
      <Button color="default" variant="dashed" type="submit">Ajouter</Button>
    </form>
  );
};

export default AddMovieForm;
*/

import { Form, Input, InputNumber, Button } from "antd";
import "./AddMovieForm.css";

const AddMovieForm = ({ onMovieAdded }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    onMovieAdded(values);
    form.resetFields();
  };

  return (
    <div className="form-container">
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Titre"
        name="title"
        rules={[{ required: true, message: "Veuillez entrer le titre" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Réalisateur"
        name="director"
        rules={[{ required: true, message: "Veuillez entrer le réalisateur" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Durée"
        name="duration"
        rules={[{ required: true, message: "Veuillez entrer la durée" }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label="URL de l'image"
        name="imageUrl"
        rules={[{ required: true, message: "Veuillez entrer l'URL de l'image" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Veuillez entrer la description" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Budget"
        name="budget"
        rules={[{ required: true, message: "Veuillez entrer le budget" }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Ajouter le film
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default AddMovieForm;
