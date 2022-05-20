if grep -q "failing" test-results.txt; then
    echo "-----SOME FAILING TESTS-----"
else
    echo "-----TESTS RAN SUCCESSEFULLY-----"
fi