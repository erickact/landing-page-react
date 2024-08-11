import React from 'react'

const Cards = () => {

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 px-md-5 mx-md-5 mb-5 mx-3">
      <div className="col">
        <div className="card h-100">
          <img src="https://placehold.co/500x325" className="card-img-top" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer bg-white d-flex justify-content-center align-itmes-center">
              <button type="button" class="btn btn-primary">Find Out More!</button>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="https://placehold.co/500x325" className="card-img-top" alt="..."/>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer bg-white d-flex justify-content-center align-itmes-center">
            <button type="button" class="btn btn-primary">Find Out More!</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="https://placehold.co/500x325" className="card-img-top" alt="..."/>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer bg-white d-flex justify-content-center align-itmes-center">
            <button type="button" class="btn btn-primary">Find Out More!</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="https://placehold.co/500x325" className="card-img-top" alt="..."/>
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer bg-white d-flex justify-content-center align-itmes-center">
            <button type="button" class="btn btn-primary">Find Out More!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards