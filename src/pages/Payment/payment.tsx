import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMask, IMaskInput } from "react-imask";

import { FieldInputValues, schema } from "./validationSchema";

import { Head } from "../../components/Head/head";
import { PayOrder } from "../../components/OrderCloseAction/PayOrder/pay_order";
import { OrderHeader } from "../../components/OrderHeader/order_header";
import { Container, Form, Inner } from "./styles";
import { useCart } from "../../hooks/useCart";
import { CustomerData } from "../../interfaces/CustomerData";

export function Payment() {
   const { payOrder } = useCart();

   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm<FieldInputValues>({ resolver: yupResolver(schema) });

   const onSubmit: SubmitHandler<FieldInputValues> = (data) => payOrder(data as CustomerData);

   return (
      <Container>
         <Head title='Pagamento' />
         <OrderHeader />
         <Inner>
            <Form onSubmit={handleSubmit(onSubmit)}>
               <h4>Informações pessoais</h4>

               <div className='field'>
                  <label htmlFor='fullName'>Nome e Sobrenome</label>

                  <Controller
                     name='fullName'
                     control={control}
                     render={({ field }) => <input type='text' id='fullName' {...field} />}
                  />

                  {errors.fullName && <span className='error'>{errors.fullName.message}</span>}
               </div>

               <div className='grouped'>
                  <div className='field'>
                     <label htmlFor='email'>Email</label>
                     <Controller
                        name='email'
                        control={control}
                        render={({ field }) => <input type='email' id='email' {...field} />}
                     />
                     {errors.email && <span className='error'>{errors.email.message}</span>}
                  </div>

                  <div className='field'>
                     <label htmlFor='mobile'>Celular</label>
                     <Controller
                        name='mobile'
                        control={control}
                        render={({ field }) => (
                           <IMaskInput type='tel' id='mobile' mask={"(00) 90000-0000"} {...field} />
                        )}
                     />
                     {errors.mobile && <span className='error'>{errors.mobile.message}</span>}
                  </div>

                  <div className='field'>
                     <label htmlFor='document'>CPF / CNPJ</label>
                     <Controller
                        name='document'
                        control={control}
                        render={({ field }) => (
                           <IMaskInput
                              type='text'
                              id='document'
                              mask={[
                                 { mask: "000.000.000-00", maxLength: 11 },
                                 { mask: "00.000.000/0000-00" },
                              ]}
                              {...field}
                           />
                        )}
                     />
                     {errors.document && <span className='error'>{errors.document.message}</span>}
                  </div>
               </div>

               <h4>Endereço de entrega</h4>

               <div className='field'>
                  <label htmlFor='zipCode'>CEP</label>
                  <Controller
                     name='zipCode'
                     control={control}
                     render={({ field }) => (
                        <IMaskInput
                           type='text'
                           id='zipCode'
                           style={{ width: "120px" }}
                           mask={"00000-000"}
                           {...field}
                        />
                     )}
                  />
                  {errors.zipCode && <span className='error'>{errors.zipCode.message}</span>}
               </div>

               <div className='field'>
                  <label htmlFor='street'>Endereço</label>
                  <Controller
                     name='street'
                     control={control}
                     render={({ field }) => <input type='text' id='street' {...field} />}
                  />
                  {errors.street && <span className='error'>{errors.street.message}</span>}
               </div>

               <div className='grouped'>
                  <div className='field'>
                     <label htmlFor='number'>Número</label>
                     <Controller
                        name='number'
                        control={control}
                        render={({ field }) => <input type='text' id='number' {...field} />}
                     />
                     {errors.number && <span className='error'>{errors.number.message}</span>}
                  </div>

                  <div className='field'>
                     <label htmlFor='complement'>Complemento</label>
                     <Controller
                        name='complement'
                        control={control}
                        render={({ field }) => <input type='text' id='complement' {...field} />}
                     />
                     {errors.complement && (
                        <span className='error'>{errors.complement.message}</span>
                     )}
                  </div>
               </div>

               <div className='grouped'>
                  <div className='field'>
                     <label htmlFor='neighborhood'>Bairro</label>
                     <Controller
                        name='neighborhood'
                        control={control}
                        render={({ field }) => <input type='text' id='neighborhood' {...field} />}
                     />
                     {errors.neighborhood && (
                        <span className='error'>{errors.neighborhood.message}</span>
                     )}
                  </div>

                  <div className='field'>
                     <label htmlFor='city'>Cidade</label>
                     <Controller
                        name='city'
                        control={control}
                        render={({ field }) => <input type='text' id='city' {...field} />}
                     />
                     {errors.city && <span className='error'>{errors.city.message}</span>}
                  </div>

                  <div className='field'>
                     <label htmlFor='state'>Estado</label>

                     <Controller
                        name='state'
                        control={control}
                        render={({ field }) => (
                           <select id='state' {...field}>
                              <option value=''>Selecione</option>
                              <option value='AC'>Acre</option>
                              <option value='AL'>Alagoas</option>
                              <option value='AP'>Amapá</option>
                              <option value='AM'>Amazonas</option>
                              <option value='BA'>Bahia</option>
                              <option value='CE'>Ceará</option>
                              <option value='ES'>Espírito Santo</option>
                              <option value='GO'>Goiás</option>
                              <option value='MA'>Maranhão</option>
                              <option value='MT'>Mato Grosso</option>
                              <option value='MS'>Mato Grosso do Sul</option>
                              <option value='MG'>Minas Gerais</option>
                              <option value='PA'>Pará</option>
                              <option value='PB'>Paraíba</option>
                              <option value='PR'>Paraná</option>
                              <option value='PE'>Pernambuco</option>
                              <option value='PI'>Piauí</option>
                              <option value='RJ'>Rio de Janeiro</option>
                              <option value='RN'>Rio Grande do Norte</option>
                              <option value='RS'>Rio Grande do Sul</option>
                              <option value='RO'>Rondônia</option>
                              <option value='RR'>Roraima</option>
                              <option value='SC'>Santa Catarina</option>
                              <option value='SP'>São Paulo</option>
                              <option value='SE'>Sergipe</option>
                              <option value='TO'>Tocantins</option>
                              <option value='DF'>Distrito Federal</option>
                           </select>
                        )}
                     />
                     {errors.state && <span className='error'>{errors.state.message}</span>}
                  </div>
               </div>

               <h4>Pagamento</h4>

               <div className='field'>
                  <label htmlFor='creditCardNumber'>Número do cartão</label>
                  <Controller
                     name='creditCardNumber'
                     control={control}
                     render={({ field }) => (
                        <IMaskInput
                           type='text'
                           id='creditCardNumber'
                           mask={[
                              { mask: "0000 000000 0000", maxLength: 14 },
                              { mask: "0000 000000 00000", maxLength: 15 },
                              { mask: "0000 0000 0000 0000" },
                           ]}
                           {...field}
                        />
                     )}
                  />
                  {errors.creditCardNumber && (
                     <span className='error'>{errors.creditCardNumber.message}</span>
                  )}
               </div>

               <div className='field'>
                  <label htmlFor='creditCardHolderName'>Nome impresso no cartão</label>
                  <Controller
                     name='creditCardHolderName'
                     control={control}
                     render={({ field }) => (
                        <input type='text' id='creditCardHolderName' {...field} />
                     )}
                  />
                  {errors.creditCardHolderName && (
                     <span className='error'>{errors.creditCardHolderName.message}</span>
                  )}
               </div>

               <div className='grouped'>
                  <div className='field'>
                     <label htmlFor='creditCardExpiration'>Validade (MM/AA)</label>
                     <Controller
                        name='creditCardExpiration'
                        control={control}
                        render={({ field }) => (
                           <IMaskInput
                              type='text'
                              id='creditCardExpiration'
                              mask={[
                                 {
                                    mask: "MM/YY",
                                    blocks: {
                                       MM: {
                                          mask: IMask.MaskedRange,
                                          from: 1,
                                          to: 12,
                                       },
                                       YY: {
                                          mask: IMask.MaskedRange,
                                          from: new Date().getFullYear() - 2000,
                                          to: 99,
                                       },
                                    },
                                 },
                              ]}
                              {...field}
                           />
                        )}
                     />
                     {errors.creditCardExpiration && (
                        <span className='error'>{errors.creditCardExpiration.message}</span>
                     )}
                  </div>

                  <div className='field'>
                     <label htmlFor='creditCardSecurityCode'>Código de segurança</label>
                     <Controller
                        name='creditCardSecurityCode'
                        control={control}
                        render={({ field }) => (
                           <IMaskInput
                              type='text'
                              id='creditCardSecurityCode'
                              mask={"0000"}
                              {...field}
                           />
                        )}
                     />
                     {errors.creditCardSecurityCode && (
                        <span className='error'>{errors.creditCardSecurityCode.message}</span>
                     )}
                  </div>
               </div>
               <PayOrder />
            </Form>
         </Inner>
      </Container>
   );
}
