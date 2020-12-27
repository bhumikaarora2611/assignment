import React, { Component } from 'react';
import './App.css'
import Customer from './Customer';
import { Icon, Table } from 'semantic-ui-react';

class App extends Component {
    state = {
      data : [
        {
            id: 4633499533378,
            name: 'Test 1',
            quantity: 3,
            product_id: 4460755157058,
            orderId: 7,
            orderDate: '2020-04-14T06:15:23.000Z'
        },
        {
            id: 4633579421762,
            name: 'Test 2',
            quantity: 1,
            product_id: 4467615531074,
            orderId: 6,
            orderDate: '2020-04-14T06:42:47.000Z'
        },
        {
            id: 4633579454530,
            name: 'Test 1',
            quantity: 2,
            product_id: 4460755157058,
            orderId: 6,
            orderDate: '2020-04-14T06:42:47.000Z'
        },
        {
            id: 4684687114306,
            name: 'Test 4',
            quantity: 4,
            product_id: 4467830194242,
            orderId: 3,
            orderDate: '2020-04-24T10:07:57.000Z'
        },
        {
            id: 4684738265154,
            name: 'Test 1',
            quantity: 2,
            product_id: 4460755157058,
            orderId: 3,
            orderDate: '2020-04-24T10:07:57.000Z'
        },
        {
            id: 4684890800194,
            name: 'Test 6',
            quantity: 10,
            product_id: 4455579123778,
            orderId: 2,
            orderDate: '2020-04-24T11:41:40.000Z'
        },
        {
            id: 4684890832962,
            name: 'Test 7',
            quantity: 60,
            product_id: 4455579025474,
            orderId: 2,
            orderDate: '2020-04-24T11:41:40.000Z'
        },
        {
            id: 4684890800295,
            name: 'Test 6',
            quantity: 50,
            product_id: 4455579123778,
            orderId: 2,
            orderDate: '2020-04-24T11:41:40.000Z'
        },
        {
            id: 4684687114408,
            name: 'Test 4',
            quantity: 4,
            product_id: 4467830194242,
            orderId: 8,
            orderDate: '2020-04-24T10:07:57.000Z'
        },
        {
            id: 4633579422763,
            name: 'Test 2',
            quantity: 5,
            product_id: 4467615531074,
            orderId: 6,
            orderDate: '2020-04-14T06:42:47.000Z'
        }

      ]
      
    }

    render() 
    {
        
        
         return (
        <div>
            <h2>CUSTOMER ORDER DETAILS</h2>
            

              <Table celled structured>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Product Name</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Product ID</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Quantity</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>A</Table.Cell>
        <Table.Cell>Test 1</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>4460755157058</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>3<input type='text' className="ewin1"></input></Table.Cell>
        <Table.Cell><select><option value="one">True</option>
        <option value="two">False</option></select></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell rowSpan='3'>B</Table.Cell>
        <Table.Cell>Test 2</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>4467615531074	</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>1<input type='text' className="ewin1"></input></Table.Cell>
        <Table.Cell><select><option value="one">True</option>
        <option value="two">False</option></select>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test 1</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>4460755157058	</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>2<input type='text' className="ewin1"></input></Table.Cell>
        <Table.Cell><select><option value="one">True</option>
        <option value="two">False</option></select>
        </Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test 4</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>4467830194242	</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>4<input type='text' className="ewin1"></input></Table.Cell>
        <Table.Cell><select><option value="one">True</option>
        <option value="two">False</option></select>
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell rowSpan='3'>C</Table.Cell>
        <Table.Cell>Test 1</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>4460755157058</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>2<input type='text' className="ewin1"></input></Table.Cell>
        <Table.Cell><select><option value="one">True</option>
        <option value="two">False</option></select>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test 6</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>4455579123778	</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>10<input type='text' className="ewin1"></input></Table.Cell>
        <Table.Cell><select><option value="one">True</option>
        <option value="two">False</option></select>
        </Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test 7</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>4455579025474</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>60<input type='text' className="ewin1"></input></Table.Cell>
        <Table.Cell><select><option value="one">True</option>
        <option value="two">False</option></select>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell rowSpan='3'>D</Table.Cell>
        <Table.Cell>Test 6</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>4455579123778	</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>50<input type='text' className="ewin1"></input></Table.Cell>
        <Table.Cell><select><option value="one">True</option>
        <option value="two">False</option></select>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test 4</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>4467830194242</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>4<input type='text' className="ewin1"></input></Table.Cell>
        <Table.Cell><select><option value="one">True</option>
        <option value="two">False</option></select>
        </Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test 2</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>4467615531074	</Table.Cell>
        <Table.Cell style={{textAlign:'center' }}>5<input type='text' className="ewin1"></input></Table.Cell>
        <Table.Cell><select><option value="one">True</option>
        <option value="two">False</option></select>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

 


<h2>PRODUCTS LIST</h2>
<Table celled structured>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='2'>Product Id</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Product Name</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Quantity</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Product ID</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Order ID</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Order Date</Table.HeaderCell>
         </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell> {this.state.data[0].id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[0].name}</Table.Cell>
        <Table.Cell>{this.state.data[0].quantity}</Table.Cell>
        <Table.Cell>{this.state.data[0].product_id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[0].orderId}</Table.Cell>
        <Table.Cell>{this.state.data[0].orderDate}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> {this.state.data[1].id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[1].name}</Table.Cell>
        <Table.Cell>{this.state.data[1].quantity}</Table.Cell>
        <Table.Cell>{this.state.data[1].product_id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[1].orderId}</Table.Cell>
        <Table.Cell>{this.state.data[1].orderDate}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> {this.state.data[2].id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[2].name}</Table.Cell>
        <Table.Cell>{this.state.data[2].quantity}</Table.Cell>
        <Table.Cell>{this.state.data[2].product_id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[2].orderId}</Table.Cell>
        <Table.Cell>{this.state.data[2].orderDate}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> {this.state.data[3].id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[3].name}</Table.Cell>
        <Table.Cell>{this.state.data[3].quantity}</Table.Cell>
        <Table.Cell>{this.state.data[3].product_id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[3].orderId}</Table.Cell>
        <Table.Cell>{this.state.data[3].orderDate}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> {this.state.data[4].id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[4].name}</Table.Cell>
        <Table.Cell>{this.state.data[4].quantity}</Table.Cell>
        <Table.Cell>{this.state.data[4].product_id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[4].orderId}</Table.Cell>
        <Table.Cell>{this.state.data[4].orderDate}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> {this.state.data[5].id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[5].name}</Table.Cell>
        <Table.Cell>{this.state.data[5].quantity}</Table.Cell>
        <Table.Cell>{this.state.data[5].product_id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[5].orderId}</Table.Cell>
        <Table.Cell>{this.state.data[5].orderDate}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> {this.state.data[6].id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[6].name}</Table.Cell>
        <Table.Cell>{this.state.data[6].quantity}</Table.Cell>
        <Table.Cell>{this.state.data[6].product_id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[6].orderId}</Table.Cell>
        <Table.Cell>{this.state.data[6].orderDate}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> {this.state.data[7].id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[7].name}</Table.Cell>
        <Table.Cell>{this.state.data[7].quantity}</Table.Cell>
        <Table.Cell>{this.state.data[7].product_id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[7].orderId}</Table.Cell>
        <Table.Cell>{this.state.data[7].orderDate}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> {this.state.data[8].id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[8].name}</Table.Cell>
        <Table.Cell>{this.state.data[8].quantity}</Table.Cell>
        <Table.Cell>{this.state.data[8].product_id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[8].orderId}</Table.Cell>
        <Table.Cell>{this.state.data[8].orderDate}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> {this.state.data[9].id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[9].name}</Table.Cell>
        <Table.Cell>{this.state.data[9].quantity}</Table.Cell>
        <Table.Cell>{this.state.data[9].product_id}</Table.Cell>
        <Table.Cell style={{textAlign:'center'}}>{this.state.data[9].orderId}</Table.Cell>
        <Table.Cell>{this.state.data[9].orderDate}</Table.Cell>
      </Table.Row>
     
     
      
      
    </Table.Body>
  </Table>

           
            </div>
        
   
    )
         }
}

export default App
