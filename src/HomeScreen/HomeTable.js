import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function HomeTable(props) {
  const [datalist, setDataList] = useState([]);

  useEffect(() => {
    setDataList(props.datalist);
  }, [props]);

  // const datalist = [props];

  const navigate = useNavigate();
  const handleDetailsClick = (e) => {
    const id = e.currentTarget.getAttribute("data-value-1");
    //this is the best ay to send data in handlers without them getting called without making extra components in between or inline functions instead or binding
    // console.log("Values1", id);
    let temp = datalist.find((item, index) => {
      // if (item.title === searchValue) {
      //   return item;
      // }//todo how to write it
      return item.id == id;
    });
    // console.log(temp);
    navigate("/details", { state: { temp } });
  };

  return (
    <TableContainer class="w-2/3">
      <Table variant="striped" colorScheme="teal">
        {/* <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption> */}
        <Thead>
          <Tr>
            <Th>
              <div class="flex items-center justify-center">ID</div>
            </Th>
            <Th>
              <div class="flex items-center justify-center">Photo</div>
            </Th>
            <Th>
              <div class="flex items-center justify-center">Name</div>
            </Th>
            <Th>
              <div class="flex items-center justify-center">Brand</div>
            </Th>
            <Th>
              <div class="flex items-center justify-center">Price</div>
            </Th>
            <Th>
              <div class="flex items-center justify-center">Details</div>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {datalist.map((item, key) => (
            <Tr key={key}>
              {/*key is useful because each child in a list must have a unique id for easier detection in debugging*/}
              <Td>
                <div class="flex items-center justify-center">{item.id}</div>
              </Td>
              <Td>
                <div class="w-28 flex items-center justify-center">
                  <img src={item.thumbnail} alt="thumbnail" />
                </div>
              </Td>
              <Td>
                <div class="flex items-center justify-center">{item.title}</div>
              </Td>
              <Td>
                <div class="flex items-center justify-center">{item.brand}</div>
              </Td>
              <Td>
                <div class="flex items-center justify-center">
                  {"$" + item.price}
                </div>
              </Td>
              <Td>
                <div class="flex items-center justify-center">
                  <button
                    className=" rounded-lg bg-blue-700 px-4 h-full w-full text-center text-xs md:text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleDetailsClick}
                    data-value-1={item.id}
                  >
                    <p class="px-2">Show Details</p>
                  </button>
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
        {/* <Tfoot>
              <Tr>
                <Th>ID</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
              </Tr>
            </Tfoot> */}
      </Table>
    </TableContainer>
  );
}

export default HomeTable;
