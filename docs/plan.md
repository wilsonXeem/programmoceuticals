DRT → NAFDAC CTD Dossier Compiler - Build Plan
Phase 1: Core CTD Structure (Week 1)
1.1 API Submission Type Selection
Replace current Upload component with API option selector

4 radio buttons: Prequalification, CEP, APIMF, Full Details

Store selection in localStorage

Dynamic CTD structure generation based on selection

1.2 CTD Tree Structure
Replace DossierTree with CTDTree component

Use existing tree navigation logic

Map NAFDAC structure from nafdac-mapping.md

Visual indicators: required/optional, completion status

1.3 File Management Integration
Extend existing file storage to map to CTD sections

Modify IndexedDB schema to include CTD section IDs

Keep existing drag-and-drop upload functionality

Add CTD section validation

Phase 2: Guidelines & Validation (Week 2)
2.1 Guidelines Integration
Create GuidelinesPanel component

Extract requirements from nafdac-mapping.md

Show contextual help for each CTD section

Conditional display based on API option

2.2 Smart Validation
Extend existing validation with CTD rules

Required/optional section checking

File type validation per section

Progress calculation by module

2.3 Enhanced UI
Modify Review component layout

Add guidelines panel to right sidebar

Keep existing PDF/document viewing

Add completion indicators

Phase 3: Export Engine (Week 3)
3.1 NAFDAC Folder Structure
Create folder mapping from CTD sections

Use existing ZIP generation logic

Implement proper NAFDAC naming conventions

Organize files by regulatory structure

3.2 Template Generation
QOS-PD template with data population

QIS template generation

Cover letter auto-creation

Master table of contents

3.3 Export Interface
Add export button to main interface

Progress indicator during ZIP creation

Download management

Export validation before generation

Phase 4: Polish & Testing (Week 4)
4.1 User Experience
Completion dashboard

Progress tracking across modules

Error handling and user guidance

Mobile responsiveness

4.2 Data Persistence
Extend localStorage with CTD metadata

Session management

Data recovery features

Clear/reset functionality

4.3 Final Integration
Testing with sample dossiers

Performance optimization

Error boundary improvements

Documentation updates

Implementation Strategy
Leverage Existing DRT Components:
✅ File upload/storage system

✅ Document viewing (PDF/Word)

✅ Tree navigation logic

✅ IndexedDB integration

✅ Search functionality

✅ Performance optimizations

New Components Needed:
APISelectionComponent - Choose submission type

CTDTreeComponent - NAFDAC structure tree

GuidelinesPanel - Contextual help

CTDExportEngine - ZIP generation

CompletionDashboard - Progress tracking

Data Structure Changes:
// Extend existing dossier structure
const ctdDossier = {
apiSubmissionType: 'option1|option2|option3|option4',
productType: 'generic|nce|biologic',
ctdStructure: {
'Module_1': {
'1.0': { required: true, completed: false, files: [] },
'1.2.15': { required: apiType === 'option2', completed: false, files: [] }
// ... dynamic based on API option
}
},
completionStatus: { overall: 45, byModule: {...} }
}

Copy
Minimal File Changes Required:
Core Files to Modify:
src/App.js - Add API selection step

src/components/Upload.js - Replace with API selector

src/components/Review.js - Add guidelines panel

src/components/DossierTree.js - Replace with CTD structure

src/services/dossierService.js - Add CTD mapping

src/utils/checklist.js - Use as CTD structure source

New Files to Create:
src/components/APISelection.js - Submission type picker

src/components/CTDTree.js - NAFDAC tree structure

src/components/GuidelinesPanel.js - Contextual help

src/services/ctdExportService.js - ZIP generation

src/utils/ctdStructure.js - NAFDAC mapping

src/utils/nafdacGuidelines.js - Requirements database

Success Metrics:
Week 1:
✅ API selection working

✅ CTD tree displays correctly

✅ File upload maps to CTD sections

Week 2:
✅ Guidelines show for each section

✅ Validation rules working

✅ Progress tracking functional

Week 3:
✅ Export generates proper NAFDAC ZIP

✅ Templates auto-populate

✅ Folder structure matches requirements

Week 4:
✅ Complete user flow working

✅ Error handling robust

✅ Performance optimized

Risk Mitigation:
Technical Risks:
Complex CTD Structure → Use existing tree logic, extend gradually

Large File Handling → Leverage existing optimizations

Export Performance → Background processing with progress

Scope Risks:
Feature Creep → Focus on core CTD compilation only

Over-Engineering → Reuse existing components maximally

Timeline Pressure → Prioritize working MVP over polish

look at the application and tell me what you see. how complete is this plan? complete it. dont redo the ones that have been done correctly. do you understand what i am trying to achieve?
