function search() {
    var keyword = document.getElementById('search-input').value;
    var category = document.getElementById('search-category').value;

    
    var resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = "<p>Kết quả tìm kiếm cho từ khóa '" + keyword + "' trong danh mục '" + category + "'</p>";
}
