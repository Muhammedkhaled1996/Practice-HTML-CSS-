const fs = require('fs');
const data = require('./lint-results.json');
let text = '';
data.filter(f => f.errorCount > 0 || f.warningCount > 0).forEach(f => {
  text += '\n' + f.filePath + '\n';
  f.messages.forEach(m => {
    text += `  Line ${m.line}: ${m.message} (${m.ruleId})\n`;
  });
});
fs.writeFileSync('parsed-lint.txt', text);
