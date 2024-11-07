export default function json2html(data) {
    // Extract unique column names from all objects in the array
    const columns = Array.from(
      new Set(data.flatMap(item => Object.keys(item)))
    );
  
    // Begin the HTML table with the data-user attribute
    let html = '<table data-user="layareddys607@gmail.com">';
  
    // Add table headers
    html += '<thead><tr>' + columns.map(col => `<th>${col}</th>`).join('') + '</tr></thead>';
  
    // Add table body rows
    html += '<tbody>';
    data.forEach(row => {
      html += '<tr>' + columns.map(col => `<td>${row[col] || ''}</td>`).join('') + '</tr>';
    });
    html += '</tbody></table>';
  
    return html;
  }
  
