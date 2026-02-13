class ReportService {
  async generateScreeningReport(dossierName, results) {
    // Use HTML-to-PDF approach for better fidelity
    return this.generateHTMLToPDF('screening', { dossierName, results });
  }
  
  async generateComplianceReport(dossierName, results) {
    return this.generateHTMLToPDF('compliance', { dossierName, results });
  }
  
  async generateInternalReport(dossierName, responses, notes, checklist) {
    // Use browser's print functionality for exact visual match
    const reportElement = document.querySelector('.pdf-report-content');
    if (!reportElement) {
      throw new Error('Report content not found on page');
    }

    // Create a new window with only the report content
    const printWindow = window.open('', '_blank');
    const reportHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>NAFDAC Internal Review Report - ${dossierName}</title>
        <style>
          body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
          .pdf-report-content { max-width: 1000px; margin: 0 auto; }
          @media print {
            body { margin: 0; padding: 0; }
            .no-print { display: none !important; }
          }
        </style>
      </head>
      <body>
        ${reportElement.outerHTML}
      </body>
      </html>
    `;
    
    printWindow.document.write(reportHTML);
    printWindow.document.close();
    
    // Wait for content to load then trigger print
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }, 500);
    
    return `${dossierName.replace(/[^a-zA-Z0-9]/g, '_')}_Internal_Review_${new Date().toISOString().split('T')[0]}.pdf`;
  }
  
  inlineStyles(element) {
    // Apply critical styles inline to ensure they appear in PDF
    const computedStyle = window.getComputedStyle(element);
    
    // Copy essential styles
    element.style.fontFamily = computedStyle.fontFamily || 'Arial, sans-serif';
    element.style.fontSize = computedStyle.fontSize || '14px';
    element.style.lineHeight = computedStyle.lineHeight || '1.5';
    element.style.color = computedStyle.color || '#000000';
    element.style.backgroundColor = computedStyle.backgroundColor || '#ffffff';
    element.style.padding = computedStyle.padding || '2rem';
    element.style.maxWidth = '1000px';
    element.style.margin = '0 auto';
    
    // Process child elements
    const children = element.querySelectorAll('*');
    children.forEach(child => {
      const childStyle = window.getComputedStyle(child);
      
      // Preserve colors
      if (childStyle.color && childStyle.color !== 'rgb(0, 0, 0)') {
        child.style.color = childStyle.color;
      }
      if (childStyle.backgroundColor && childStyle.backgroundColor !== 'rgba(0, 0, 0, 0)') {
        child.style.backgroundColor = childStyle.backgroundColor;
      }
      
      // Preserve borders
      if (childStyle.border && childStyle.border !== 'none') {
        child.style.border = childStyle.border;
      }
      if (childStyle.borderBottom && childStyle.borderBottom !== 'none') {
        child.style.borderBottom = childStyle.borderBottom;
      }
      
      // Preserve spacing
      if (childStyle.margin && childStyle.margin !== '0px') {
        child.style.margin = childStyle.margin;
      }
      if (childStyle.padding && childStyle.padding !== '0px') {
        child.style.padding = childStyle.padding;
      }
      
      // Preserve text formatting
      if (childStyle.fontWeight && childStyle.fontWeight !== 'normal') {
        child.style.fontWeight = childStyle.fontWeight;
      }
      if (childStyle.fontSize) {
        child.style.fontSize = childStyle.fontSize;
      }
      
      // Preserve layout
      if (childStyle.display && ['flex', 'grid', 'block', 'inline-block'].includes(childStyle.display)) {
        child.style.display = childStyle.display;
      }
      if (childStyle.flexDirection) {
        child.style.flexDirection = childStyle.flexDirection;
      }
      if (childStyle.gap) {
        child.style.gap = childStyle.gap;
      }
      if (childStyle.gridTemplateColumns) {
        child.style.gridTemplateColumns = childStyle.gridTemplateColumns;
      }
      if (childStyle.textAlign && childStyle.textAlign !== 'start') {
        child.style.textAlign = childStyle.textAlign;
      }
    });
  }
  
  async fallbackPDFGeneration(dossierName, responses, notes, checklist) {
    // Fallback to original jsPDF method if html2pdf fails
    const { loadJSPDFLibrary, loadAutoTableLibrary } = await import('../utils/lazyImports');
    const [{ default: jsPDF }, autoTable] = await Promise.all([
      loadJSPDFLibrary(),
      loadAutoTableLibrary()
    ]);
    
    const doc = new jsPDF();
    
    // Enhanced Header with NAFDAC branding
    doc.setFillColor(44, 62, 80);
    doc.rect(0, 0, 210, 35, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('NAFDAC INTERNAL REVIEW REPORT', 105, 15, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text('National Agency for Food and Drug Administration and Control', 105, 25, { align: 'center' });
    
    // Reset text color
    doc.setTextColor(0, 0, 0);
    
    // Dossier Information Box
    doc.setFillColor(248, 249, 250);
    doc.rect(14, 45, 182, 25, 'F');
    doc.setDrawColor(222, 226, 230);
    doc.rect(14, 45, 182, 25, 'S');
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Dossier Information', 20, 55);
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.text(`Dossier Name: ${dossierName}`, 20, 62);
    doc.text(`Report Generated: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`, 20, 68);
    
    // Summary Statistics
    const completenessItems = checklist.filter(item => !item.excludeFromCompleteness);
    const answered = completenessItems.filter(item => responses.has(item.id)).length;
    const yesCount = Array.from(responses.values()).filter(r => r === 'yes').length;
    const noCount = Array.from(responses.values()).filter(r => r === 'no').length;
    const partialCount = Array.from(responses.values()).filter(r => r === 'partial').length;
    const complianceRate = answered > 0 ? Math.round(((yesCount + partialCount * 0.5) / answered) * 100) : 0;
    
    // Summary Box
    const summaryY = 80;
    doc.setFillColor(complianceRate >= 80 ? 232 : complianceRate >= 60 ? 255 : 255, 
                     complianceRate >= 80 ? 245 : complianceRate >= 60 ? 243 : 235, 
                     complianceRate >= 80 ? 233 : complianceRate >= 60 ? 224 : 238);
    doc.rect(14, summaryY, 182, 35, 'F');
    doc.setDrawColor(complianceRate >= 80 ? 40 : complianceRate >= 60 ? 255 : 220, 
                     complianceRate >= 80 ? 167 : complianceRate >= 60 ? 152 : 53, 
                     complianceRate >= 80 ? 69 : complianceRate >= 60 ? 0 : 69);
    doc.rect(14, summaryY, 182, 35, 'S');
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Assessment Summary', 20, summaryY + 10);
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.text(`Questions Answered: ${answered} of ${completenessItems.length}`, 20, summaryY + 18);
    doc.text(`Compliance Rate: ${complianceRate}%`, 20, summaryY + 25);
    doc.text(`Yes: ${yesCount} | Partial: ${partialCount} | No: ${noCount}`, 20, summaryY + 32);
    
    // Overall Status
    const statusText = complianceRate >= 80 ? 'COMPLIANT' : complianceRate >= 60 ? 'NEEDS ATTENTION' : 'MAJOR DEFICIENCIES';
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(complianceRate >= 80 ? 46 : complianceRate >= 60 ? 239 : 198, 
                     complianceRate >= 80 ? 125 : complianceRate >= 60 ? 108 : 40, 
                     complianceRate >= 80 ? 50 : complianceRate >= 60 ? 0 : 40);
    doc.text(`Overall Status: ${statusText}`, 120, summaryY + 25);
    doc.setTextColor(0, 0, 0);
    
    // Detailed Results Table
    const answeredItems = checklist.filter(item => responses.has(item.id));
    const tableData = answeredItems.map(item => {
      const response = responses.get(item.id);
      const note = notes.get(item.id) || 'No additional notes';
      const statusIcon = response === 'yes' ? '✓' : response === 'no' ? '✗' : '~';
      
      return [
        `Q${item.id}`,
        item.section,
        item.question.length > 50 ? item.question.substring(0, 50) + '...' : item.question,
        statusIcon,
        response.charAt(0).toUpperCase() + response.slice(1),
        note.length > 100 ? note.substring(0, 100) + '...' : note
      ];
    });
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Detailed Assessment Results', 14, 130);
    
    doc.autoTable({
      startY: 140,
      head: [['Q#', 'Section', 'Question', '✓', 'Response', 'Assessment Notes']],
      body: tableData,
      styles: { 
        fontSize: 8, 
        cellPadding: 3,
        overflow: 'linebreak',
        lineColor: [200, 200, 200],
        lineWidth: 0.5
      },
      headStyles: { 
        fillColor: [52, 152, 219],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 9
      },
      columnStyles: {
        0: { cellWidth: 12, halign: 'center' },
        1: { cellWidth: 30 },
        2: { cellWidth: 60 },
        3: { cellWidth: 8, halign: 'center' },
        4: { cellWidth: 18, halign: 'center' },
        5: { cellWidth: 60 }
      },
      alternateRowStyles: { fillColor: [248, 249, 250] },
      margin: { left: 14, right: 14 },
      didParseCell: function(data) {
        if (data.column.index === 4 && data.cell.raw) {
          const response = data.cell.raw.toLowerCase();
          if (response === 'yes') {
            data.cell.styles.fillColor = [212, 237, 218];
            data.cell.styles.textColor = [21, 87, 36];
          } else if (response === 'no') {
            data.cell.styles.fillColor = [248, 215, 218];
            data.cell.styles.textColor = [114, 28, 36];
          } else if (response === 'partial') {
            data.cell.styles.fillColor = [255, 243, 205];
            data.cell.styles.textColor = [133, 100, 4];
          }
        }
      }
    });
    
    // Footer with enhanced styling
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      
      // Footer line
      doc.setDrawColor(52, 152, 219);
      doc.setLineWidth(1);
      doc.line(14, doc.internal.pageSize.height - 20, 196, doc.internal.pageSize.height - 20);
      
      doc.setFontSize(8);
      doc.setTextColor(108, 117, 125);
      doc.text(
        `NAFDAC Dossier Screening System | Page ${i} of ${pageCount}`,
        14,
        doc.internal.pageSize.height - 12
      );
      
      doc.text(
        `Generated: ${new Date().toLocaleDateString()}`,
        196,
        doc.internal.pageSize.height - 12,
        { align: 'right' }
      );
    }
    
    // Save the PDF
    const fileName = `${dossierName.replace(/[^a-zA-Z0-9]/g, '_')}_Internal_Review_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
    
    return fileName;
  }
  async generateHTMLToPDF(type, data) {
    throw new Error(`HTML-to-PDF generation for ${type} not implemented yet`);
  }
  
  groupResultsByModule(results) {
    const groups = {};
    
    results.forEach(result => {
      const moduleName = result.path.split('/')[0] || 'Other';
      if (!groups[moduleName]) {
        groups[moduleName] = [];
      }
      groups[moduleName].push(result);
    });
    
    return groups;
  }
}

export const reportService = new ReportService();