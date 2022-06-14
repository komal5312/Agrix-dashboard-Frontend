import React, { Component } from 'react';

class Farmer_List extends Component {
    render() {
        return (
            <div>
                <h1>Farmers Details & their Corresponding Plot Area (acres)</h1>
                <table className='table table-dark'>

                    <thead>
        <tr>
          <th>Farmer Name</th>
          <th>Village Name</th>
          <th>Area (acres)</th>
          <th>Mobile Number</th>
        </tr>
        <tr>
          <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
        </tr>

        <tr>
        <td>Anant Kumar</td>
          <td>Keshauri</td>
          <td>0.19ac</td>
          <td>7781854827</td>
        </tr>

        <tr>
        <td>Anil Singh</td>
          <td>Marui</td>
          <td>0.38ac</td>
          <td>9939621104</td>
          </tr>


          <tr>
        <td>Arjun Pandit</td>
          <td>Marui</td>
          <td>0.29ac,0.26ac,0.26ac,0.21ac,0.13ac,0.2ac</td>
          <td>7452913120</td>
          </tr>

          <tr>
        <td>Audhesh Noniye</td>
          <td>Bisanpur</td>
          <td>0.22ac</td>
          <td></td>
          </tr>

          <tr>
        <td>Bablu Singh</td>
          <td>Marui</td>
          <td>0.31ac,0.27ac</td>
          <td>9508705326</td>
          </tr>

          <tr>
        <td>Bachandev saran</td>
          <td>Marui</td>
          <td>0.2ac,0.19ac,0.72</td>
          <td>7763027037</td>
          </tr>


          <tr>
        <td>Binay Pandey</td>
          <td>Marui</td>
          <td>0.29ac</td>
          <td>9430074663</td>
          </tr>


          <tr>
        <td>Bipin  Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>7739005225</td>
          </tr>


          <tr>
        <td>Chandan Singh</td>
          <td>Marui</td>
          <td>0.13ac</td>
          <td>7979017505</td>
          </tr>


          <tr>
        <td>Chintu Singh</td>
          <td>Marui</td>
          <td>0.18ac</td>
          <td>7004628123</td>
          </tr>


          <tr>
        <td>chottu kumar</td>
          <td>Marui</td>
          <td>0.1ac</td>
          <td>9955112483</td>
          </tr>


          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Chuhan Singh</td>
          <td>Keshauri</td>
          <td>0.27ac</td>
          <td>9934630405</td>
          </tr>


          <tr>
        <td>Chumu Singh</td>
          <td>Marui</td>
          <td>0.21ac</td>
          <td>8294630405</td>
          </tr>



          <tr>
        <td>Dak Babu</td>
          <td>Marui</td>
          <td>0.09ac</td>
          <td>7484946640</td>
          </tr>



          <tr>
        <td>Danesh Paswan </td>
          <td>Bisanpur</td>
          <td>0.33ac,0.1ac</td>
          <td>6379528284</td>
          </tr>


          <tr>
        <td>Ranjan Singh</td>
          <td>Marui</td>
          <td>0.32ac</td>
          <td>8825690359</td>
          </tr>


          <tr>
        <td>Ramotar Chaudhary </td>
          <td></td>
          <td>0.08ac,0.22ac</td>
          <td>99341062236</td>
          </tr>


          <tr>
        <td>Gudann Singh</td>
          <td>Keshauri</td>
          <td>0.46ac</td>
          <td>7979879524</td>
          </tr>


          <tr>
        <td>Bachandev saran </td>
          <td></td>
          <td>0.11ac</td>
          <td>7763027037</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Dharmendra  Singh</td>
          <td>Marui</td>
          <td>0.05ac ,0.2 , 0.24</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Dinna Singh</td>
          <td>Marui</td>
          <td>0.16ac , 0.16 , 0.2</td>
          <td>8964912866</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Dinesh Singh</td>
          <td>Marui</td>
          <td>0.21ac</td>
          <td>7979909245</td>
          </tr>

          <tr>
        <td>Funtus Pandit</td>
          <td>Marui</td>
          <td>0.08ac</td>
          <td>8521082347</td>
          </tr>

          <tr>
        <td>Ghutu Singh</td>
          <td>Marui</td>
          <td>0.06ac</td>
          <td>9650279262</td>
          </tr>


          <tr>
        <td>Gorelal Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Gudann Singh</td>
          <td>Keshauri</td>
          <td>0.17ac , 0.4ac , 0.4</td>
          <td>7979879524</td>
          </tr>


          <tr>
        <td>Gudkun Singh</td>
          <td>Marui</td>
          <td>0.5ac</td>
          <td>8825690359</td>
          </tr>

          <tr>
        <td>Guddu Singh</td>
          <td>Marui</td>
          <td>0.25ac</td>
          <td>9973169346</td>
          </tr>

          <tr>
        <td> Hadasa kumar Singh</td>
          <td>Marui</td>
          <td>0.1ac  ,0.15</td>
          <td>7201163761</td>
          </tr>


          <tr>
        <td>Kallu Singh</td>
          <td>Marui</td>
          <td>0.34ac , 0.21</td>
          <td>7644910951</td>
          </tr>


          <tr>
        <td>Karu Singh</td>
          <td>Marui</td>
          <td>0.22ac , 0.21ac</td>
          <td>7654788151</td>
          </tr>


          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Krishna Singh</td>
          <td>Marui</td>
          <td>0.26ac </td>
          <td>8434994120</td>
          </tr>


          <tr>
        <td>Manoj Singh</td>
          <td>Marui</td>
          <td>0.18ac</td>
          <td>8051126639</td>
          </tr>


          <tr>
        <td>Manu Jadav </td>
          <td>Marui</td>
          <td>0.07ac</td>
          <td>9835768006</td>
          </tr>


          <tr>
        <td>Moti Ravidas</td>
          <td>Marui</td>
          <td>0.27ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Nardev Jadav</td>
          <td></td>
          <td>0.8ac</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Omprakash Ram </td>
          <td>Marui</td>
          <td>0.32ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9771871788</td>
          </tr>

          <tr>
        <td>Pappu Singh</td>
          <td>Marui</td>
          <td>0.11ac , 0.05ac , 0.08ac , 0.17ac , 0</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Pandav Kumar</td>
          <td>Marui</td>
          <td>0.24ac</td>
          <td>7645014941</td>
          </tr>


          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Pankaj Singh</td>
          <td>Marui</td>
          <td>0.22ac,0.14ac</td>
          <td>9472069015</td>
          </tr>


          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>


          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>

          <tr>
        <td>Ajay Singh</td>
          <td>Marui</td>
          <td>0.19ac</td>
          <td>9939637155</td>
          </tr>
        
        
        
        
        
        
        
        </thead>
      </table>
            </div>
        );
    }
}

export default Farmer_List;