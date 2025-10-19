import { defineConfig } from 'vitest/config';
export default defineConfig({
    test: {
        // Test configuration
        timeout: 300000, // 5 minutes for integration tests
        testTimeout: 180000, // 3 minutes per test
        hookTimeout: 60000, // 1 minute for setup/teardown
        // Reporters configuration
        reporters: [
            'verbose', // Keep the existing verbose output
            'default', // Add default reporter for better summary
        ],
        // Custom reporter for summary
        onFinished: (files, errors) => {
            const totalTests = files.reduce((acc, file) => {
                return acc + (file.tasks?.length || 0);
            }, 0);
            const passedTests = files.reduce((acc, file) => {
                return acc + (file.tasks?.filter(task => task.result?.state === 'pass')?.length || 0);
            }, 0);
            const failedTests = files.reduce((acc, file) => {
                return acc + (file.tasks?.filter(task => task.result?.state === 'fail')?.length || 0);
            }, 0);
            const skippedTests = totalTests - passedTests - failedTests;
            console.log('\n' + '='.repeat(60));
            console.log('📊 TEST SUMMARY');
            console.log('='.repeat(60));
            console.log(`✅ Passed: ${passedTests}`);
            console.log(`❌ Failed: ${failedTests}`);
            console.log(`⏭️  Skipped: ${skippedTests}`);
            console.log(`📈 Total: ${totalTests}`);
            console.log('='.repeat(60));
            if (failedTests > 0) {
                console.log('\n❌ FAILED TESTS:');
                files.forEach(file => {
                    const failedInFile = file.tasks?.filter(task => task.result?.state === 'fail') || [];
                    if (failedInFile.length > 0) {
                        console.log(`\n📁 ${file.name}:`);
                        failedInFile.forEach(task => {
                            console.log(`  • ${task.name}`);
                            if (task.result?.errors?.length) {
                                task.result.errors.forEach(error => {
                                    console.log(`    ${error.message || error.toString()}`);
                                });
                            }
                        });
                    }
                });
            }
            if (passedTests === totalTests && totalTests > 0) {
                console.log('\n🎉 All tests passed! 🎉');
            }
        }
    }
});
