/* eslint-disable array-callback-return */
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Productdetails = () => {
    const {id}=useParams()
    console.log(id)

    const [Data,setData]=useState([])
    useEffect(()=>{
        axios({
            url:`http://localhost:8080/modesens/beauty/${id}`,
            method:"GET"
        })
        .then((res)=>{
            setData(res.data)
        })
    },[id])
    const handleCart=()=>{
        
    }
    const LongDes="We will fulfill your order by finding the best price available from our partner stores, applying any applicable promotions and providing assistance on tracking, returns or anything else you may need. "
  return (
    <div>
        {
            Data.map((el)=>( 
                <Box>
                    <Flex display={'flex'}>
                        <Box marginLeft={"18%"} marginRight={"5%"}>
                            <Image src={el?.url} alt='Dan Abramov' height={"350px"} width="110%" marginTop={"30%"} />    
                        </Box>
                        <Box marginLeft="0%" marginTop="5%" textAlign={"left"} >
                            <Heading fontFamily="body" fontSize="40" >{el?.name}</Heading>
                        
                            <Box>
                                <Text fontSize="25" color='GrayText'>{el?.desc}</Text>
                            </Box>
                            <Box>
                                <Text fontSize="25" color="black">${el?.price} USD</Text>
                            </Box>
                            <Box>
                                <Text fontSize="25" color="black">Shop From {el?.stores} Stores</Text>
                            </Box>
                            <Box>
                                <Text fontSize="25" color="black" paddingBottom={"10%"}>Join now to earn 276 points from this purchase. <u>Learn more</u></Text>
                            </Box>
                            <Button width="30%" textAlign="center" height='40px' borderRadius="15px" fontSize="20px" backgroundColor="black" color="white" fontWeight="bold" onClick={handleCart}>Add To Cart</Button>
                        
                            <Button width="30%" textAlign="center" height='40px' borderRadius="15px" fontSize="20px" backgroundColor="black" color="white" fontWeight="bold" marginLeft={55} >wishlist  </Button>
                        </Box>
                    </Flex>
                 
                    <Box  marginTop={"20"}>
                        <Text color='GrayText' fontSize="25" textAlign="left" marginLeft={"18%"} fontFamily="body" fontWeight={"bold"}>Shop With ModeSens Concierge</Text>
                        <Text textAlign="left" fontSize="25" color='GrayText' marginLeft={"18%"} width={"50%"}>{LongDes}</Text>
                    </Box>
                    <Box fontSize="25" marginTop={"15"}>
                        <Text >Available exclusively for Silver and above members.</Text>
                        <Text><u>Join Now.</u></Text>
                    </Box>
            
                    
                    
                </Box>
            ))
        }
        
    </div>
  )
}

export default Productdetails