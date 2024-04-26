`http://localhost:5173///` is address pe bhi jana par home page hi aaraha hai , lakin routing nhi ho rhi hai kisi mai header ke link pe click kr ne pe

rounting for "/contact/me" and "/contact/company"
<Route path='contact' element={<Contact />}>
        <Route path='me' element={<Me />} />
        <Route path='company' element={<Company />} />
      </Route>
      and this is the way how i did it 
      <Route path='contact' >
        <Route path='' element={<Contact />} />
        <Route path='me' element={<Me />} />
        <Route path='company' element={<Company />} />
      </Route>
