$rebaseDir = ".git/rebase-merge"
$rebaseMergeSwap = ".git/rebase-merge/.git-rebase-todo.swp"

# Remove the swap file
if (Test-Path $rebaseMergeSwap) {
    Remove-Item $rebaseMergeSwap -Force
}

# Remove the rebase-merge directory
if (Test-Path $rebaseDir) {
    Remove-Item $rebaseDir -Recurse -Force
}

# Update reflog entry
$reflosPath = ".git/logs/refs/heads/main"
$reflogContent = Get-Content $reflosPath -Raw
$newEntry = (Get-Date (Get-Date).ToUniversalTime() -UFormat "+%s") + " -0000`trebase (label): returning to refs/heads/main"
if (-not ($reflogContent -match "rebase")) {
    Add-Content $reflosPath -Value $newEntry
}

Write-Host "Cleanup complete"
