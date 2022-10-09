import React from 'react';
import styled from 'styled-components'
import './modal.css'


const windowModal = ({ children, estado, cambiarEsrado }) => {
    return (
        <>
            {estado &&
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <h3>CHARACTER INFORMATION</h3>
                        </EncabezadoModal>
                        <Botoncerrar onClick={() => cambiarEsrado(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                            </svg>
                        </Botoncerrar>

                        {children}


                    </ContenedorModal>
                </Overlay>
            }
        </>

    );
};

export default windowModal;

const Overlay = styled.div`
    width: 100vw;
    height: 90vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .9);


    display:flex;
    padding:40px;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 600px;
    min-heigth: 100px
    // z-indez: 2;
    background: #ffff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
`

const EncabezadoModal = styled.div`
   display:flex;
   align-item:center;
   justify-content: space-between;
   margin-bottom: 20px;
   padding-bottom: 20px;
   border-bottom: 1px solid #E8E8E8;

   h3 {
      font-weight: 900;
      font-size: 16px;
      color: #C1FF00;
   }


`

const Botoncerrar = styled.button`

   position: absolute;
   top: 15px;
   right:15px;

   width: 30px;
   height: 28px;
   border: none;
   bacground: none;
   cursor: pointer;
   transition: .3s ease all;
   border-radius: 5px;
   color:#1766DC;

   &:hover {
    background: #f2f2f2;
   }


   svg {
    width: 100%
    height: 100%
   }
`
