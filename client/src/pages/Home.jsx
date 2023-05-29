import React, { useEffect, useState } from 'react'
import { deleteCoinById, getAllCoins } from '../api/requests';
import Swal from "sweetalert2";

const Home = () => {

  const [coins, setCoins] = useState();
  useEffect(() => {
    getAllCoins().then((res) => {
      setCoins(res)
    })
  }, [])
  return (
    <>
      <p>TAKE A LOOK AT OUR</p>
      <h1>A simple trading system</h1>

      <div className='container'>
        <div className='row'>
          {coins && coins.map((coin) => {
            return <div key={coin._id} className='cards'>
              <img src={coin.imageURL} alt="" />
              <h4>{coin.name}</h4>
              <p>{coin.desc}</p>
              <button
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      deleteCoinById(coin._id).then((res) => {
                        Swal.fire(
                          `${res.name} Deleted!`,
                          "Your coin has been deleted.",
                          "success"
                        );
                      });
                      setCoins(
                        coins.filter((x) => x._id !== coin._id)
                      );
                    }
                  });
                }}
                variant="outlined"
                color="warning"
              >
                Delete
              </button>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Home