import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

const ProductTable = () => {
  const [fetchData, setFetchData] = useState([]);
  const [addData, setAddData] = useState({});
  const [editData, setEditData] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    apiFetch();
  }, []);

  const apiFetch = async () => {
    let res = await axios.get("https://p-9x7e.onrender.com/products/products");
    setFetchData(res.data.data);
  };

  const deleteApi = async (deleteId) => {
    let res = await axios.delete(
      `https://p-9x7e.onrender.com/products/delete-product/${deleteId}`
    );
    apiFetch();
    if (res.data.error) {
      alert(res.data.message);
    } else {
      alert(res.data.message);
    }
  };

  const addApi = async () => {
    let res = await axios.post(
      "https://p-9x7e.onrender.com/products/add-product",
      addData
    );
    if (res.data.error) {
      alert(res.data.message);
    } else {
      alert(res.data.message);
    }
    apiFetch();
    setShowAddModal(false);
  };

  const editApi = async () => {
    let res = await axios.put(
      `https://p-9x7e.onrender.com/products/edit-product/${editId}`,
      editData
    );
    if (res.data.error) {
      alert(res.data.message);
    } else {
      alert(res.data.message);
    }
    apiFetch();
    setShowEditModal(false);
  };

  const handleAddModalClose = () => setShowAddModal(false);
  const handleEditModalClose = () => setShowEditModal(false);

  const handleEdit = (id) => {
    setEditId(id);
    setShowEditModal(true);
  };

  return (
    <div>
      <Button onClick={() => setShowAddModal(true)}>Add Product</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fetchData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(product.id)}>
                  Edit
                </Button>{" "}
                <Button variant="danger" onClick={() => deleteApi(product.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/ Add Product Modal /}
      <Modal show={showAddModal} onHide={handleAddModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                onChange={(e) => setAddData({ ...addData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                onChange={(e) => setAddData({ ...addData, price: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addApi}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>

      {/ Edit Product Modal /}
      <Modal show={showEditModal} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEditProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formEditProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                onChange={(e) => setEditData({ ...editData, price: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editApi}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductTable;
