import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

const ProductTable = () => {
  const [fetchData, setFetchData] = useState([]);
  const [addData, setAddData] = useState({ name: "", price: "" });
  const [editData, setEditData] = useState({ name: "", price: "" });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const res = await axios.get("https://p-9x7e.onrender.com/products/products");
      setFetchData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteProduct = async (deleteId) => {
    try {
      const res = await axios.delete(
        `https://p-9x7e.onrender.com/products/delete-product/${deleteId}`
      );
      if (res.status === 200) {
        fetchDataFromApi(); // Refresh data after successful deletion
        alert(res.data.message);
      } else {
        console.error("Delete request failed with status:", res.status);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const addProduct = async () => {
    try {
      const res = await axios.post(
        "https://p-9x7e.onrender.com/products/add-product",
        addData
      );
      fetchDataFromApi(); // Refresh data after successful addition
      alert(res.data.message);
      setShowAddModal(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const editProduct = async () => {
    try {
      const res = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${editId}`,
        editData
      );
      fetchDataFromApi(); 
      alert(res.data.message);
      setShowEditModal(false);
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };
  

  const handleAddModalClose = () => {
    setShowAddModal(false);
    setAddData({ name: "", price: "" }); 
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    setEditId(null); // Reset editId state
    setEditData({ name: "", price: "" }); 
  };

  const handleEdit = (id, name, price) => {
    setEditId(id);
    setEditData({ name, price });
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
                <Button variant="info" onClick={() => handleEdit(product.id, product.name, product.price)}>
                  Edit
                </Button>{" "}
                <Button variant="danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteProduct(product.id) }}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      
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
                value={addData.name}
                onChange={(e) => setAddData({ ...addData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                value={addData.price}
                onChange={(e) => setAddData({ ...addData, price: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProduct}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>

     
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
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formEditProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                value={editData.price}
                onChange={(e) => setEditData({ ...editData, price: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductTable;
