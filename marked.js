  function marked(content,searchKeyword) {
        var keyword = $.trim(searchKeyword.toLocaleUpperCase('tr'));
        if (keyword.length > 2) {
              	 var keywordlength = keyword.length;
                var foundkeyword = content.toLocaleUpperCase('tr').indexOf(keyword);
                if (foundkeyword != -1) {
                    var newkeyword = content.substr(foundkeyword, keywordlength);
                    var newcontent = content.replace(newkeyword, '<span class="search-found">' + newkeyword + '</span>');
                   
                }
        }
        return newcontent;
    }
