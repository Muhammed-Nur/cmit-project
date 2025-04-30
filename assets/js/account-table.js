function tableCreatorD(dataName, tableName, responsiveStatus, fixedLeftCol, columnsData, showItem, filterActive) {
    tableName.DataTable({
        data: dataName,
        lengthChange: false,
        order: false,
        bFilter: filterActive,
        info: false,
        paging: true,
        pageLength : showItem,
        bDestroy: true,
        responsive: responsiveStatus,
        autoWidth: false,
        bDestroy: true,
        scrollX: true,
        fixedColumns:{
            left: fixedLeftCol,
        },
        columnDefs: [{
            bSortable: false,
            targets: [0, 1, 2, 3]
        }],
        columns: columnsData
    });
}